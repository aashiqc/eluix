"use client"

import useSWR from 'swr'
import React from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Image from "next/image";

const Dashboard = () => {



  const session = useSession();

  const router = useRouter();
  
  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  return (
    <div className={styles.container}>
      Dashboard
    </div>
  )
}

export default Dashboard
