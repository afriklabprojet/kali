import speakeasy from 'speakeasy'

export const generateSecret = () => {
  return speakeasy.generateSecret({ length: 32 })
}

export const verifyToken = (secret: string, token: string) => {
  return speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: token
  })
}

export const generateQRCodeUrl = (secret: string, email: string) => {
  return speakeasy.otpauthURL({
    secret: secret,
    label: email,
    issuer: 'CICO-CASH'
  })
}