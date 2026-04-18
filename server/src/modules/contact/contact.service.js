import Contact from './contact.model.js';

class ContactService {
  async createContact(data) {
    console.log('💾 Attempting to save contact:', data);
    const contact = await Contact.create(data);
    console.log('✅ Contact saved with ID:', contact._id);
    return contact;
  }

  async getAllContacts(query = {}) {
    const { read, limit = 50, sort = '-createdAt' } = query;
    const filter = {};
    if (read !== undefined) filter.read = read === 'true';
    
    const contacts = await Contact.find(filter)
      .sort(sort)
      .limit(parseInt(limit));
    return contacts;
  }

  async getContactById(id) {
    const contact = await Contact.findById(id);
    if (!contact) throw new Error('Contact not found');
    return contact;
  }

  async markAsRead(id) {
    const contact = await Contact.findByIdAndUpdate(
      id,
      { read: true },
      { new: true }
    );
    if (!contact) throw new Error('Contact not found');
    return contact;
  }

  async deleteContact(id) {
    const contact = await Contact.findById(id);
    if (!contact) throw new Error('Contact not found');
    await contact.deleteOne();
    return { message: 'Contact deleted' };
  }
}

export default new ContactService();