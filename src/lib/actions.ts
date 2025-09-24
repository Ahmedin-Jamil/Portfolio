export const downloadFile = (fileUrl: string, fileName: string) => {
  // Create a temporary link
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

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