import { addPost, getPosts } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const posts = getPosts();
    return NextResponse.json(
      {
        message: "All Posts",
        posts,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "error",
        error,
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: Request, res: Response) => {
  const { title, description } = await req.json();
  try {
    const errors = [
      { title: "Please add title" },
      { description: "Please add description" },
    ];
    for (const error of errors) {
      if (!error.title) NextResponse.json({ message: error.title });
    }
    const post = {
      id: Date.now().toString(),
      title,
      description,
      date: new Date().toISOString(),
    };
    addPost(post);
    return NextResponse.json(
      { message: "post successfully", post },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error in Post controller",
        error,
      },
      { status: 500 }
    );
  }
};

export const PUT = async (req: Request, res: Response) => {
  console.log("put request");
};
