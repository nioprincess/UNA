import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IContactInfo extends Document {
  facebook:  String 
  linkedin:  String 
  instagram: String 
  twitter: String 
  location:  String 
  phoneNumber:  String 
  email:  String 
}

const ContactInfoSchema: Schema = new mongoose.Schema({
  facebook: { type: String, required: true },
  linkedin: { type: String, required: true },
  instagram: { type: String, required: true },
  twitter: { type: String, required: true },
  location: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
})

const ContactInfo: Model<IContactInfo> =
  mongoose.models.ContactInfo || mongoose.model<IContactInfo>('ContactInfo', ContactInfoSchema)

export default ContactInfo
