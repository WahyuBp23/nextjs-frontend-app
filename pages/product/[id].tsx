import { useRouter } from 'next/router';
import React from 'react'

export default function Product() {
        const router = useRouter();
        const { id } = router.query;
      
        // Data mock
        const product = {
          id,
          name: `Produk ${id}`,
          description: `Ini adalah deskripsi untuk produk ${id}.`,
        };
      
        return (
          <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>
        );
      
}
