import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.ionos.fr",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // Port 465 avec SSL/TLS
  auth: {
    user: process.env.SMTP_USER || "youwillnotsee",
    pass: process.env.SMTP_PASS || "aaaaa", // Assurez-vous que ce mot de passe est exact, sans quotes
  },
});


export async function POST(request: Request) {
  const { name, email, entreprise, message } = await request.json();

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER || "contact@mathiscarcenac.fr", // Expéditeur autorisé
      to: process.env.MY_EMAIL || "contact@mathiscarcenac.fr",
      replyTo: email, // Pour que vous puissiez répondre directement à l'utilisateur
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nEntreprise: ${entreprise}\nMessage: ${message}`,
    });
    return NextResponse.json({ message: "Email envoyé avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json({ message: "Erreur lors de l'envoi de l'email" }, { status: 500 });
  }
}
