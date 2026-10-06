import { STORE_CONFIG } from '../config/storeConfig';
import type { CartItem } from '../types';

export function formatPrice(price: number): string {
  return `${STORE_CONFIG.currency} ${price.toLocaleString('en-PK')}`;
}

/**
 * Builds WhatsApp direct order link for a single item
 */
export function buildSingleProductWhatsAppUrl(
  productName: string,
  variantLabel: string,
  unitPrice: number,
  quantity: number = 1
): string {
  const lineTotal = unitPrice * quantity;
  const message = [
    `Hello ${STORE_CONFIG.name}, I want to order:`,
    `• ${productName} (${variantLabel}) x ${quantity} — ${formatPrice(lineTotal)}`,
    ``,
    `Total (estimate): ${formatPrice(lineTotal)}`,
    ``,
    `Please confirm stock availability and delivery to my address.`
  ].join('\n');

  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds WhatsApp direct order link for cart items aggregate
 */
export function buildCartWhatsAppUrl(cartItems: CartItem[]): string {
  if (cartItems.length === 0) {
    return `https://wa.me/${STORE_CONFIG.whatsappNumber}`;
  }

  const grandTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const lines = cartItems.map((item, index) => {
    const lineTotal = item.price * item.quantity;
    return `${index + 1}. ${item.productName} (${item.variantLabel}) x ${item.quantity} — ${formatPrice(lineTotal)}`;
  });

  const message = [
    `Hello ${STORE_CONFIG.name}, I want to order:`,
    ...lines,
    ``,
    `Total (estimate): ${formatPrice(grandTotal)}`,
    ``,
    `Please confirm price, availability, and delivery details.`
  ].join('\n');

  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds general WhatsApp consultation / customer support link
 */
export function buildGeneralInquiryWhatsAppUrl(queryMessage?: string): string {
  const message = queryMessage || `Hello ${STORE_CONFIG.name}, I have an inquiry regarding auto parts & engine oils.`;
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
