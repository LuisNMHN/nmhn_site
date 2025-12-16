import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Aseguramos que esta ruta use el runtime de Node.js (no Edge), necesario para nodemailer
export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, tipoProyecto, descripcion } = await request.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"NMHN Web" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "info@netmarkethn.com",
      subject: `Nueva solicitud de cotización - ${nombre}`,
      replyTo: email,
      text: `
Nueva solicitud de cotización desde la web:

Nombre: ${nombre}
Correo: ${email}
Teléfono: +504 ${telefono}
Tipo de proyecto: ${tipoProyecto || "No especificado"}

Descripción del proyecto:
${descripcion}
      `.trim(),
      html: `
        <h2>Nueva solicitud de cotización</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> +504 ${telefono}</p>
        <p><strong>Tipo de proyecto:</strong> ${tipoProyecto || "No especificado"}</p>
        <p><strong>Descripción del proyecto:</strong></p>
        <p>${descripcion.replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error enviando correo de cotización:", error)
    return NextResponse.json({ ok: false, error: "EMAIL_ERROR" }, { status: 500 })
  }
}


