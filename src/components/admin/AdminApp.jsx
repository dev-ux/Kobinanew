import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import AdminLogin from './AdminLogin';
import AdminLayout from './AdminLayout';
import AdminDashboard from './AdminDashboard';
import BlogList from './BlogList';
import BlogEditor from './BlogEditor';
import ContactList from './ContactList';

// Monté sous /admin/* : l'authentification Supabase n'est chargée que dans cet espace
export default function AdminApp() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<AdminLogin />} />
        <Route element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/new" element={<BlogEditor />} />
          <Route path="blog/edit/:id" element={<BlogEditor />} />
          <Route path="contacts" element={<ContactList />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
