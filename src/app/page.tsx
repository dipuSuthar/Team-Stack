'use client';

import React from 'react'
import { useAppSelector } from '@/store/hooks';

const Home = () => {
  const state = useAppSelector((state) => state)
  console.log("Redux State:", state);
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        TeamTask
      </h1>

      <p className="mt-4">
        Redux Toolkit is connected.
      </p>
    </main>

  )
}

export default Home