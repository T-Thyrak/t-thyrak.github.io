import Link from "next/link";
import NTLink from "@/components/ntlink";

export default function ExperiencesStage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full my-8">
      <h1 className="text-5xl font-bold m-2" id="experiences">
        Experiences
      </h1>
      <hr className="w-full keep-border border-rosewater" />
      <div className="my-8">
        {/* from https://flowbite.com/docs/components/timeline/ */}
        <ol className="relative border-s border-teal keep-border">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-teal rounded-full -start-1.5 border border-teal keep-border"></div>
            <p className="mb-1 text-sm text-teal font-normal leading-none">
              <time dateTime="2024-10">Oct, 2024</time> to{" "}
              <time dateTime="2025-02">Feb, 2025</time>
            </p>
            <h3 className="text-lg font-semibold">Software Developer</h3>
            <h4 className="text-lg text-sky">Umanlink</h4>
            <ul className="mb-4 text-sm text-subtext0 font-normal list-disc ml-4">
              <li>
                Developed and deployed internal AI projects regarding LLM for{" "}
                <NTLink href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation">
                  RAG (Retrieval Augmented Generation)
                </NTLink>
              </li>
              <li>
                Responsible for continued development and improvements for the
                backend system of the RAG system
              </li>
              <li>Learned about the latest RAG technologies</li>
            </ul>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-teal rounded-full -start-1.5 border border-teal keep-border"></div>
            <p className="mb-1 text-sm text-teal font-normal leading-none">
              <time dateTime="2024-05">May</time> to{" "}
              <time dateTime="2024-09">Sep, 2024</time>
            </p>
            <h3 className="text-lg font-semibold">Software Developer Intern</h3>
            <h4 className="text-lg text-sky">Umanlink</h4>
            <ul className="mb-4 text-sm text-subtext0 font-normal list-disc ml-4">
              <li>
                Developed and deployed internal AI projects regarding LLM and
                other technologies
              </li>
              <li>
                Responsible for the development and designing the AI application
                system
              </li>
              <li>
                Learned about the latest AI and speech-related (
                <NTLink href="https://openai.com/index/whisper">
                  OpenAI Whisper
                </NTLink>
                ,{" "}
                <NTLink href="https://openai.com/index/introducing-the-realtime-api">
                  OpenAI Realtime API
                </NTLink>
                ){" "}
                <NTLink href="https://en.wikipedia.org/wiki/Seq2seq">
                  sequence-to-sequence
                </NTLink>{" "}
                AI technologies
              </li>
            </ul>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-teal rounded-full -start-1.5 border border-teal keep-border"></div>
            <p className="mb-1 text-sm text-teal font-normal leading-none">
              <time dateTime="2024-03-05">Mar 5th</time> to{" "}
              <time dateTime="2024-03-13">Mar 13th, 2024</time>
            </p>
            <h3 className="text-lg font-semibold">Machine Learning Engineer</h3>
            <h4 className="text-lg text-sky">
              Cambodia Academy of Digital Technology, Assignment Project
            </h4>
            <ul className="mb-4 text-sm text-subtext0 font-normal list-disc ml-4">
              <li>
                Developed a{" "}
                <NTLink href="https://github.com/t-thyrak/aifeel">
                  sentimental analysis system
                </NTLink>{" "}
                using a combination of different machine learning models (
                <NTLink href="https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.MultinomialNB.html">
                  MultinomialNB
                </NTLink>
                ,{" "}
                <NTLink href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html">
                  Logistic Regression
                </NTLink>
                ,{" "}
                <NTLink href="https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html#sklearn.svm.SVC">
                  SVM
                </NTLink>
                ) and{" "}
                <NTLink href="https://github.com/T-Thyrak/aifeel/blob/3d8acf70350b648db580fbbd1e043fa3571774b6/src/aifeel/model/nn.py#L86">
                  deep learning model
                </NTLink>
                .
              </li>
              <li>
                Responsible for the development of the preprocessing pipeline,
                creating, and training the deep learning model.
              </li>
              <li>
                Learned how to create a basic NLP model for sentimental
                analysis, and how to use machine learning models effectively
                with text inputs.
              </li>
            </ul>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-teal rounded-full -start-1.5 border border-teal keep-border"></div>
            <p className="mb-1 text-sm text-teal font-normal leading-none">
              <time dateTime="2024-01-01">Jan 1st</time> to{" "}
              <time dateTime="2024-03-26">Mar 26th, 2024</time>
            </p>
            <h3 className="text-lg font-semibold">Machine Learning Engineer</h3>
            <h4 className="text-lg text-sky">
              Cambodia Academy of Digital Technology, Assignment Project
            </h4>
            <ul className="mb-4 text-sm text-subtext0 font-normal list-disc ml-4">
              <li>
                Developed a{" "}
                <NTLink href="https://gitlab.com/snapcheck-system/snapcheck-recognize">
                  face detection system
                </NTLink>{" "}
                using deep learning models (
                <NTLink href="https://www.tensorflow.org/api_docs/python/tf/keras/applications/MobileNet">
                  MobileNetV1
                </NTLink>
                ,
                <NTLink href="https://www.tensorflow.org/api_docs/python/tf/keras/applications/ResNet50">
                  ResNet50
                </NTLink>
                ,{" "}
                <NTLink href="https://en.wikipedia.org/wiki/AlexNet">
                  AlexNet
                </NTLink>
                ) and <NTLink href="https://opencv.org/">OpenCV</NTLink>.
              </li>
              <li>
                Responsible for the development of the preprocessing pipeline
                and training the deep learning model, as well as the transfer
                learning cycle.
              </li>
              <li>
                Learned the ins and outs of data engineering for a face
                detection system.
              </li>
            </ul>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-teal rounded-full -start-1.5 border border-teal keep-border"></div>
            <p className="mb-1 text-sm text-teal font-normal leading-none">
              <time dateTime="2023-03">March</time> to{" "}
              <time dateTime="2023-05">May, 2023</time>
            </p>
            <h3 className="text-lg font-semibold">Backend Developer</h3>
            <h4 className="text-lg text-sky">
              Cambodia Academy of Digital Technology, Assignment Project
            </h4>
            <ul className="mb-4 text-sm text-subtext0 font-normal list-disc ml-4">
              <li>
                Responsible for the development of the backend system and
                database.
              </li>
              <li>
                Learned what makes a good database schema, database
                normalization, and how to create a sensible REST API.
              </li>
              <li>Trusted to be a competent backend developer.</li>
            </ul>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-teal rounded-full -start-1.5 border border-teal keep-border"></div>
            <p className="mb-1 text-sm text-teal font-normal leading-none">
              <time dateTime="2022-10">October</time> to{" "}
              <time dateTime="2022-12">December, 2022</time>
            </p>
            <h3 className="text-lg font-semibold">Machine Learning Engineer</h3>
            <h4 className="text-lg text-sky">
              Cambodia Academy of Digital Technology, Assignment Project
            </h4>
            <ul className="mb-4 text-sm text-subtext0 font-normal list-disc ml-4">
              <li>
                Developed a{" "}
                <NTLink href="https://gitlab.com/t-thyrak/irc-chatbot">
                  chatbot program
                </NTLink>{" "}
                for giving information about Cambodia Academy of Digital
                Technology using simple machine learning techniques.
              </li>
              <li>
                Learned the basic of creating system and basic machine learning
                algorithms.
              </li>
              <li>
                The system is able to interact with 2 different interfaces
              </li>
              <li>Trusted to be a competent machine learning engineer.</li>
            </ul>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-teal rounded-full -start-1.5 border border-teal keep-border"></div>
            <p className="mb-1 text-sm text-teal font-normal leading-none">
              <time dateTime="2022-03">March</time> to{" "}
              <time dateTime="2022-05">May, 2022</time>
            </p>
            <h3 className="text-lg font-semibold">Software Developer</h3>
            <h4 className="text-lg text-sky">
              Cambodia Academy of Digital Technology, Assignment Project
            </h4>
            <ul className="mb-4 text-sm text-subtext0 font-normal list-disc ml-4">
              <li>
                Developed a{" "}
                <NTLink href="https://github.com/t-thyrak/coffee-shop-management">
                  PoS application
                </NTLink>
                , a simple coffee shop management system using JavaFX.
              </li>
              <li>
                Learned how to create GUI applications, software design, and
                design patterns.
              </li>
            </ul>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-teal rounded-full -start-1.5 border border-teal keep-border"></div>
            <p className="mb-1 text-sm text-teal font-normal leading-none">
              <time dateTime="2022-01">January</time> to{" "}
              <time dateTime="2022-05">May, 2022</time>
            </p>
            <h3 className="text-lg font-semibold">Mobile Frontend Developer</h3>
            <h4 className="text-lg text-sky">Tos Rean Startup</h4>
            <ul className="mb-4 text-sm text-subtext0 font-normal list-disc ml-4">
              <li>
                Took the various development roles in the startup to ensure
                reliability of the service and usability in the UX in the form
                of multi-language support.
              </li>
              <li>
                Learned how to use Flutter for cross-platform application
                development.
              </li>
              <li>Continually trusted to be a competent developer.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
