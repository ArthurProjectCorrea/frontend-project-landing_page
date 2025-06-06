// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validação básica dos campos
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    // Configurar o transporter do Nodemailer
    // Substitua com suas credenciais de e-mail e configuração do servidor SMTP
    // É altamente recomendável usar variáveis de ambiente para isso
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST, // ex: 'smtp.example.com'
      port: Number(process.env.EMAIL_SERVER_PORT), // ex: 587 ou 465
      secure: process.env.EMAIL_SERVER_SECURE === 'true', // true para 465, false para outros portos
      auth: {
        user: process.env.EMAIL_SERVER_USER, // seu usuário de e-mail
        pass: process.env.EMAIL_SERVER_PASSWORD, // sua senha de e-mail
      },
      // Adicione isso se estiver usando um certificado autoassinado em desenvolvimento (não recomendado para produção)
      // tls: {
      //   rejectUnauthorized: false
      // }
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_FROM || email}>`, // Endereço do remetente (pode ser o e-mail do formulário ou um e-mail fixo)
      to: process.env.EMAIL_TO, // Seu endereço de e-mail para onde você quer receber as mensagens
      replyTo: email, // Para que você possa responder diretamente ao remetente
      subject: `Nova mensagem de contato de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem:\n${message}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 });

  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    // Verifique o tipo de erro para fornecer mensagens mais específicas, se necessário
    if (error instanceof Error) {
        return NextResponse.json({ error: `Falha ao enviar e-mail: ${error.message}` }, { status: 500 });
    }
    return NextResponse.json({ error: 'Falha ao enviar e-mail. Erro desconhecido.' }, { status: 500 });
  }
}
