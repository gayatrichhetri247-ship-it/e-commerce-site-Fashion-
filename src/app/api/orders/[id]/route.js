import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ordersFile = path.join(process.cwd(), "src", "data", "orders.json");

export async function GET(req, { params }) {
  const { id } = params;
  try {
    const raw = await fs.promises.readFile(ordersFile, "utf-8");
    const orders = JSON.parse(raw || "[]");
    const normalizedId = id?.trim().toLowerCase();
    const order = orders.find((o) => o.orderId?.trim().toLowerCase() === normalizedId);
    if (!order) return NextResponse.json({ ok: false, error: "Order not found" }, { status: 404 });
    return NextResponse.json({ ok: true, order });
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Failed to read orders" }, { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  const { id } = params;
  try {
    const body = await req.json();
    const raw = await fs.promises.readFile(ordersFile, "utf-8");
    const orders = JSON.parse(raw || "[]");
    const normalizedId = id?.trim().toLowerCase();
    const idx = orders.findIndex((o) => o.orderId?.trim().toLowerCase() === normalizedId);
    if (idx === -1) return NextResponse.json({ ok: false, error: "Order not found" }, { status: 404 });

    orders[idx] = { ...orders[idx], ...body };
    await fs.promises.writeFile(ordersFile, JSON.stringify(orders, null, 2));

    return NextResponse.json({ ok: true, order: orders[idx] });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Failed to update order" }, { status: 500 });
  }
}
