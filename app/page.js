"use client";
import { Container } from "@/components/Container";
import { getAllCharacters } from "@/lib/characters";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      let data = await getAllCharacters();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <main>
      <Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
        {data?.characters?.map((item) => {
          return (
            <Link
              href={`/characters/${item.slug}`}
              key={item.name}
              className="overflow-hidden rounded-md"
            >
              <Image
                src={item.avatar}
                alt=""
                className="transition-all duration-500 hover:scale-110 hover:-rotate-2"
                width={500}
                height={500}
              />
            </Link>
          );
        })}
      </Container>
    </main>
  );
}
