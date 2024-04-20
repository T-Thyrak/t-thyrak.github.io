import { Desktop, Mobile } from "@/components/media";
import { Card, CardBody, CardHeader } from "@/components/extra/cards";
import NTLink from "@/components/ntlink";

export default function ProjectsStage() {
  const projects = [
    {
      header: (
        <h2 className="text-3xl font-bold">
          <NTLink href="https://gitlab.com/snapcheck-system">SnapCheck</NTLink>
        </h2>
      ),
      body: (
        <>
          <p>
            SnapCheck is a system for capturing attendance using face capturing
            and machine learning.
          </p>
          <br />
          <p>
            <span className="font-bold">Technologies:</span> Python, WebRTC,
            AsyncIO, OpenCV, MediaPipe, TensorFlow, SQL, DigitalOcean Droplet
          </p>
        </>
      ),
    },

    {
      header: (
        <h2 className="text-3xl font-bold">
          <NTLink href="https://github.com/t-thyrak/aifeel">AIFeel</NTLink>
        </h2>
      ),
      body: (
        <>
          <p>
            AIFeel is a web application that uses machine learning to analyze
            and classify the sentiment of a given text.
          </p>
          <br />
          <p>
            <span className="font-bold">Technologies:</span> Python, Streamlit,
            TensorFlow, scikit-learn, NLTK
          </p>
        </>
      ),
    },

    {
      header: (
        <h2 className="text-3xl font-bold">
          <NTLink href="https://github.com/t-thyrak/irc-chatbot">
            Information & Recommendation Chatbot
          </NTLink>
        </h2>
      ),
      body: (
        <>
          <p>
            Information and Recommendation Chatbot model and stuffs. Current
            intents.json is specialized for CADT.
          </p>
          <br />
          <p>
            <span className="font-bold">Technologies:</span> Python, Flask,
            TensorFlow, NLTK, scikit-learn, Telegram, Facebook Messenger
          </p>
        </>
      ),
    },

    {
      header: (
        <h2 className="text-3xl font-bold">
          <NTLink href="https://github.com/satyaprogrammer/buynow-react-project">
            BuyNow
          </NTLink>
        </h2>
      ),
      body: (
        <>
          <p>
            BuyNow is a simple e-commerce website that allows users to buy
            various products. Made as a capstone project.
          </p>
          <br />
          <p>
            <span className="font-bold">Technologies:</span> React, Redux,
            Stripe, Python, Flask, SQL
          </p>
        </>
      ),
    },

    {
      header: (
        <h2 className="text-3xl font-bold">
          <NTLink href="https://github.com/t-thyrak/coffee-shop-management">
            Coffee Shop Management
          </NTLink>
        </h2>
      ),
      body: (
        <>
          <p>A simple coffee shop management system written in Java.</p>
          <br />
          <p>
            <span className="font-bold">Technologies:</span> Java, JavaFX,
            Maven, SQL
          </p>
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full w-full my-8">
      <h1 className="text-5xl font-bold m-2" id="projects">
        Projects
      </h1>

      <hr className="w-full keep-border border-rosewater" />

      <div className="w-full h-full border-2 border-white my-4">
        <Desktop>
          <div className="grid grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>{project.header}</CardHeader>
                <CardBody>{project.body}</CardBody>
              </Card>
            ))}
          </div>
        </Desktop>
        <Mobile>
          <div className="flex flex-col gap-y-4">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>{project.header}</CardHeader>
                <CardBody>{project.body}</CardBody>
              </Card>
            ))}
          </div>
        </Mobile>
      </div>
    </div>
  );
}
