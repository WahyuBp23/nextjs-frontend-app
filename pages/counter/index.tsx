import Button from "@/components/atoms/Button";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <h1>Count: {count}</h1>
      <Button type="button" onClickButton={increment}>
        Tambahkan
      </Button>
      <Button type="button" onClickButton={decrement}>
        Kurangi
      </Button>
    </>
  );
}
