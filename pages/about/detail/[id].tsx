import { useRouter } from 'next/router';
import React from 'react'

export default function DetailAbout() {
    const router = useRouter();
    const { id } = router.query;

  return (
    <div>DetailAbout id = {id} </div>
  )
}
