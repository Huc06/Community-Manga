'use client';

import React from 'react';
import CreateProjectForm from '../components/CreateProjectForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CreateProjectPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Create New Project</h2>
          <CreateProjectForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateProjectPage; 