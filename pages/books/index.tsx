import Layout from '@/components/organisms/Layout';
import React from 'react';

export default function Books() {
  return (
    <Layout>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Books</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Books</li>
        </ol>
      </div>
    </Layout>
  );
}
