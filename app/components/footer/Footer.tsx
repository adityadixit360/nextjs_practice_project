import React from "react";
import Container from "../Container";
import FooterList from "./Footerlist";

const footerData = [
  {
    "Blogs Categories": ["AI Generated", "Manual", "All"],
  },
  {
    Serivces: ["Paid", "Premium", "Free"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-16 w-full sm:w-full">
      <Container>
        <div className=" flex flex-col gap-10 justify-center md:flex-row justfbe  pb-8 pt-16">
          <FooterList>
            <h3>Categories</h3>
            <a href="#">Generative AI</a>
            <a href="#">machine learning</a>
            <a href="#">machine learning</a>
            <a href="#">machine learning</a>
          </FooterList>
          <FooterList>
            <h3>Categories</h3>
            <a href="#">Generative AI</a>
            <a href="#">machine learning</a>
            <a href="#">machine learning</a>
            <a href="#">machine learning</a>
          </FooterList>
          <FooterList>
            <h3>Categories</h3>
            <a href="#">Generative AI</a>
            <a href="#">machine learning</a>
            <a href="#">machine learning</a>
            <a href="#">machine learning</a>
          </FooterList>
          <FooterList>
            <h3>About us</h3>
            <p className="text-wrap">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed adipisci voluptate explicabo nisi voluptatem quod earum quia similique dolorum, nesciunt, soluta asperiores incidunt labore nostrum odio cupiditate? Animi amet magni illo eveniet at.</p>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
