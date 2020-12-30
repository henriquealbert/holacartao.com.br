import { NextSeo } from 'next-seo';
import AdminForm from '@/components/AdminForm';

export default function AdminLogin() {
  return (
    <>
      <NextSeo noindex={true} title="Admin Login - Hola Cartão" />

      <AdminForm />
    </>
  );
}
