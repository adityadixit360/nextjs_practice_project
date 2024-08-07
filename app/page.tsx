import Carousel from "./components/CarouselHome";
import Container from "./components/Container";
import Feature from "./components/features/Feature";
import HomeBanner from "./components/HomeBanner";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Faqs from "./components/faqs/Faqs";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-full">
        <HomeBanner />
        <Container>
          <Carousel data={data} />
          <Testimonials />
          <Services />
          <Feature />
          <Faqs />
        </Container>
      </div>
    </main>
  );
}

export const data = [
  {
    image:
      "https://media.istockphoto.com/id/888477728/photo/abstract-digital-network-communication.jpg?s=2048x2048&w=is&k=20&c=DY1MR6KLOXgZUc8G9OQIxo8UJYpmP3yQjhpyTLZHDYs=",
  },
  {
    image:
      "https://media.istockphoto.com/id/888477728/photo/abstract-digital-network-communication.jpg?s=2048x2048&w=is&k=20&c=DY1MR6KLOXgZUc8G9OQIxo8UJYpmP3yQjhpyTLZHDYs=",
  },
  {
    image:
      "https://media.istockphoto.com/id/888477728/photo/abstract-digital-network-communication.jpg?s=2048x2048&w=is&k=20&c=DY1MR6KLOXgZUc8G9OQIxo8UJYpmP3yQjhpyTLZHDYs=",
  },
  {
    image:
      "https://media.istockphoto.com/id/888477728/photo/abstract-digital-network-communication.jpg?s=2048x2048&w=is&k=20&c=DY1MR6KLOXgZUc8G9OQIxo8UJYpmP3yQjhpyTLZHDYs=",
  },
  {
    image:
      "https://media.istockphoto.com/id/888477728/photo/abstract-digital-network-communication.jpg?s=2048x2048&w=is&k=20&c=DY1MR6KLOXgZUc8G9OQIxo8UJYpmP3yQjhpyTLZHDYs=",
  },
  {
    image:
      "https://media.istockphoto.com/id/888477728/photo/abstract-digital-network-communication.jpg?s=2048x2048&w=is&k=20&c=DY1MR6KLOXgZUc8G9OQIxo8UJYpmP3yQjhpyTLZHDYs=",
  },
];
