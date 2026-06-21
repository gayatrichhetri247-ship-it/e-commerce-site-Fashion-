import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ordersFile = path.join(process.cwd(), "src", "data", "orders.json");

function generateOrderId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const timestamp = Date.now().toString().slice(-6);
  return `ORD-${id}-${timestamp}`;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const orderId = generateOrderId();
    const raw = await fs.promises.readFile(ordersFile, "utf-8");
    const orders = JSON.parse(raw || "[]");

    const newOrder = {
      orderId,
      status: "pending",
      createdAt: new Date().toISOString(),
      ...body,
    };

    orders.push(newOrder);
    await fs.promises.writeFile(ordersFile, JSON.stringify(orders, null, 2));

    return NextResponse.json({ ok: true, orderId, order: newOrder });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Failed to create order" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const raw = await fs.promises.readFile(ordersFile, "utf-8");
    const orders = JSON.parse(raw || "[]");
    return NextResponse.json({ ok: true, orders });
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Failed to read orders" }, { status: 500 });
  }
}
