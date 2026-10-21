// Edit contact details and key copy here — used everywhere on the site.
export const site = {
  name: "Nnanta Charles",
  role: "AI Video & Content Creator",
  whatsappNumber: "2348105298218", // country code, no plus
  whatsappDisplay: "+234 810 529 8218",
  email: "nnantatechnology@gmail.com",
  responseTime: "24 hours",
  clientsPerQuarter: 3,
 
 
  socials: {
    LinkedIn: "https://www.linkedin.com/in/charlesnnanta",
    Instagram: "https://www.instagram.com/perfect_studio8/",
    X: "https://x.com/chibuike_095",
  },


  stats: [
    { value: "50M+", label: "Views generated" },
    { value: "30+", label: "Brands served" },
    { value: "10x", label: "Faster than traditional production" },
  ],
};

export const waLink = (topic?: string) => {
  const msg = topic
    ? `Hi Nnanta, I found your portfolio and I'm interested in ${topic}.`
    : "Hi Nnanta, I found your portfolio and would like to discuss a project.";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

export const mailLink = (topic?: string, body?: string) => {
  const subject = topic ? `Project Enquiry: ${topic}` : "Project Enquiry";
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
};
