import asyncHandler from '../../utils/asyncHandler.js';
import ApiResponse from '../../utils/ApiResponse.js';
import contactService from './contact.service.js';
import { sendContactNotification } from '../../utils/emailService.js';

// Submit contact form (public)
export const submitContact = asyncHandler(async (req, res) => {
  // Save to database
  const contact = await contactService.createContact(req.body);

  // Send email notification (fire-and-forget)
  sendContactNotification(req.body).catch(err => {
    console.error('Failed to send contact email:', err.message);
  });

  ApiResponse.success(res, 'Message sent successfully', contact, 201);
});

// Admin: Get all contacts
export const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await contactService.getAllContacts(req.query);
  ApiResponse.success(res, 'Contacts retrieved', contacts);
});

// Admin: Get single contact
export const getContactById = asyncHandler(async (req, res) => {
  const contact = await contactService.getContactById(req.params.id);
  ApiResponse.success(res, 'Contact retrieved', contact);
});

// Admin: Mark as read
export const markAsRead = asyncHandler(async (req, res) => {
  const contact = await contactService.markAsRead(req.params.id);
  ApiResponse.success(res, 'Contact marked as read', contact);
});

// Admin: Delete contact
export const deleteContact = asyncHandler(async (req, res) => {
  await contactService.deleteContact(req.params.id);
  ApiResponse.success(res, 'Contact deleted successfully');
});