// Script para probar la configuración de ZeptoMail
// Ejecutar con: node scripts/test-zeptomail.js

require('dotenv').config({ path: '.env.local' });

const apiKey = process.env.ZEPTOMAIL_API_KEY;
const bounceAddress = process.env.ZEPTOMAIL_BOUNCE_ADDRESS;

console.log('\n=== Verificación de Configuración de ZeptoMail ===\n');

// 1. Verificar que las variables existan
console.log('1. Variables de entorno:');
console.log(`   ✓ ZEPTOMAIL_API_KEY: ${apiKey ? 'Configurada' : '❌ NO configurada'}`);
console.log(`   ✓ ZEPTOMAIL_BOUNCE_ADDRESS: ${bounceAddress ? 'Configurada' : '❌ NO configurada'}`);

if (!apiKey || !bounceAddress) {
  console.log('\n❌ ERROR: Faltan variables de entorno en .env.local');
  process.exit(1);
}

// 2. Verificar formato del API Key
console.log('\n2. Formato del API Key:');
console.log(`   Longitud: ${apiKey.length} caracteres`);
console.log(`   Primeros caracteres: ${apiKey.substring(0, 8)}...`);
console.log(`   Últimos caracteres: ...${apiKey.substring(apiKey.length - 4)}`);

if (apiKey.includes(' ')) {
  console.log('   ⚠️  ADVERTENCIA: El API Key contiene espacios');
}

if (apiKey.startsWith('Zoho-enczapikey')) {
  console.log('   ⚠️  ADVERTENCIA: El API Key no debe incluir el prefijo "Zoho-enczapikey"');
}

if (apiKey === 'tu_api_key_aqui') {
  console.log('   ❌ ERROR: Todavía tienes el valor de ejemplo. Reemplázalo con tu API Key real.');
  process.exit(1);
}

// 3. Verificar formato del Bounce Address
console.log('\n3. Bounce Address:');
console.log(`   Email: ${bounceAddress}`);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(bounceAddress)) {
  console.log('   ⚠️  ADVERTENCIA: El formato del email parece incorrecto');
}

// 4. Hacer prueba de conexión con ZeptoMail
console.log('\n4. Probando conexión con ZeptoMail API...');

const formattedApiKey = apiKey.startsWith('Zoho-enczapikey ')
  ? apiKey
  : `Zoho-enczapikey ${apiKey}`;

fetch('https://api.zeptomail.com/v1.1/email', {
  method: 'POST',
  headers: {
    'Authorization': formattedApiKey,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    bounce_address: bounceAddress,
    from: {
      address: bounceAddress,
      name: 'NMHN Test',
    },
    to: [
      {
        email_address: {
          address: 'test@example.com',
        },
      },
    ],
    subject: 'Test de configuración',
    textbody: 'Este es un correo de prueba',
  }),
})
  .then(async (response) => {
    const text = await response.text();
    console.log(`   Código de respuesta: ${response.status}`);
    
    if (response.ok) {
      console.log('   ✅ API Key VÁLIDA - La configuración funciona correctamente');
    } else {
      console.log('   ❌ Error en la respuesta:');
      try {
        const json = JSON.parse(text);
        console.log('   ', JSON.stringify(json, null, 2));
        
        if (json.error?.code === 'TM_4001') {
          console.log('\n   💡 El token es inválido. Verifica:');
          console.log('      - Que copiaste el token completo de ZeptoMail');
          console.log('      - Que el token no esté revocado');
          console.log('      - Que tenga permisos de "Send Mail"');
        }
      } catch (e) {
        console.log('   ', text);
      }
    }
  })
  .catch((error) => {
    console.log('   ❌ Error de conexión:', error.message);
  });

