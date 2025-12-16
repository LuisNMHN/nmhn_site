import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, tipoProyecto, descripcion } = await request.json()

    // Validar que tenemos las variables de entorno necesarias
    const zeptoMailApiKey = process.env.ZEPTOMAIL_API_KEY
    const zeptoMailBounceAddress = process.env.ZEPTOMAIL_BOUNCE_ADDRESS

    if (!zeptoMailApiKey || !zeptoMailBounceAddress) {
      console.error("ZeptoMail configuration missing")
      return NextResponse.json(
        { ok: false, error: "EMAIL_CONFIG_ERROR" },
        { status: 500 }
      )
    }

    // Construir el contenido del correo
    const emailSubject = `Nueva solicitud de cotización - ${nombre}`
    const emailBody = `
Nueva solicitud de cotización desde la web:

Nombre: ${nombre}
Correo: ${email}
Teléfono: +504 ${telefono}
Tipo de proyecto: ${tipoProyecto || "No especificado"}

Descripción del proyecto:
${descripcion}
    `.trim()

    const emailBodyHTML = `
      <h2>Nueva solicitud de cotización</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> +504 ${telefono}</p>
      <p><strong>Tipo de proyecto:</strong> ${tipoProyecto || "No especificado"}</p>
      <p><strong>Descripción del proyecto:</strong></p>
      <p>${descripcion.replace(/\n/g, "<br />")}</p>
    `

    // Enviar correo usando ZeptoMail API
    // La API key puede venir con o sin el prefijo "Zoho-enczapikey"
    const apiKey = zeptoMailApiKey.startsWith("Zoho-enczapikey ")
      ? zeptoMailApiKey
      : `Zoho-enczapikey ${zeptoMailApiKey}`
    
    const zeptoMailResponse = await fetch("https://api.zeptomail.com/v1.1/email", {
      method: "POST",
      headers: {
        "Authorization": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bounce_address: zeptoMailBounceAddress,
        from: {
          address: zeptoMailBounceAddress,
          name: "NMHN Web",
        },
        to: [
          {
            email_address: {
              address: "info@netmarkethn.com",
            },
          },
        ],
        reply_to: [
          {
            email_address: {
              address: email,
              name: nombre,
            },
          },
        ],
        subject: emailSubject,
        textbody: emailBody,
        htmlbody: emailBodyHTML,
      }),
    })

    if (!zeptoMailResponse.ok) {
      const errorData = await zeptoMailResponse.text()
      console.error("ZeptoMail API error:", errorData)
      return NextResponse.json(
        { ok: false, error: "EMAIL_SEND_ERROR" },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error enviando correo de cotización:", error)
    return NextResponse.json(
      { ok: false, error: "EMAIL_ERROR" },
      { status: 500 }
    )
  }
}

