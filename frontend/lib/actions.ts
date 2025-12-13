export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const handleContact = (type: 'email' | 'phone' | 'location', value: string) => {
  switch (type) {
    case 'email':
      window.location.href = `mailto:${value}`;
      break;
    case 'phone':
      window.location.href = `tel:${value}`;
      break;
    case 'location':
      window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`, '_blank');
      break;
  }
};