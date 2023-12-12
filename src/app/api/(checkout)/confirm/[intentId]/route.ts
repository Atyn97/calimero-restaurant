import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

<<<<<<< HEAD
export async function PUT({ params }: { params: { intentId: string } }) {
=======
export const PUT = async ({ params }: { params: { intentId: string } }) => {
>>>>>>> 07daf8a05b5fa00aee6d319bb8eb3b1bb3a672cb
  const { intentId } = params;

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "Being prepared!" },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
<<<<<<< HEAD
}
=======
};
>>>>>>> 07daf8a05b5fa00aee6d319bb8eb3b1bb3a672cb
