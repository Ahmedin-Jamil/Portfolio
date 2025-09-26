// App.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Simple Toaster component (replace with your UI library's version)
const Toaster = () => <div id="toast-root" />;

// Simple Sonner component (replace with your UI library's version)  
const Sonner = () => <div id="sonner-root" />;

// Simple TooltipProvider component (replace with your UI library's version)
const TooltipProvider = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-auto">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Your App Name. All rights reserved.</p>
    </div>
  </footer>
);

// Header Component
const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto">
      <h1 className="text-xl font-bold">Your App</h1>
    </div>
  </header>
);

// Index Page Component
const Index = () => (
  <div className="container mx-auto p-4">
    <Header />
    <main className="py-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to Your App</h2>
      <p>This is the main page of your application.</p>
    </main>
    <Footer />
  </div>
);

// ChatBot Component
const ChatBot = () => (
  <div className="fixed bottom-4 right-4">
    <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600">
      💬
    </button>
  </div>
);

// NotFound Page Component
const NotFound = () => (
  <div className="container mx-auto p-4 text-center">
    <Header />
    <main className="py-8">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-xl mb-4">Page Not Found</p>
      <a href="/" className="text-blue-500 hover:underline">
        Go back to home
      </a>
    </main>
    <Footer />
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <div className="relative min-h-screen">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatBot />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;