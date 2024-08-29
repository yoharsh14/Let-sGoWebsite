export default function Faq() {
  return (
    <div className="flex flex-col gap-2 w-3/4">
      <div className="collapse collapse-arrow bg-matteBlack">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          1. Why Let's Go Solutions
        </div>
        <div className="collapse-content">
          <p>
            <b>Experienced & Skilled Developers</b> : Our team of developers has
            over 10 years of experience in the software development industry. We
            have a deep understanding of the latest technologies and best
            practices.
            <br />
            <br />
            <b>High-Quality, Software Solutions</b> : We use the latest
            technologies and best practices to ensure that our products are of
            the highest quality. We also have a rigorous testing process to
            ensure that our products are reliable and secure.
            <br />
            <br />
            <b>Flexible and Adaptable to Your Needs</b> : We understand that
            every project is different, and we are willing to work with you to
            create a solution that meets your specific requirements. We are also
            flexible with our pricing terms.
            <br />
            <br />
            <b>Committed to Customer Satisfaction</b>: We value your feedback
            and are always looking for ways to improve our services. A dedicated
            support team that is available to help you with any issues you may
            have.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-matteBlack">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          2. What are the steps involved in development?
        </div>
        <div className="collapse-content">
            <ul>
              <li>
                <b>Planning:</b> This is the process of defining the goals of
                the website and creating a plan for how to achieve them.
              </li>
              <br />
              <li>
                <b>Design:</b> This is the process of creating the visual
                appearance of the website.
              </li>
              <br />
              <li>
                <b>Development:</b> This is the process of writing the code for
                the website.
              </li>
              <br />
              <li>
                <b>Testing:</b> This is the process of testing the website to
                ensure that it works as expected.
              </li>
              <br />
              <li>
                <b>Deployment:</b> This is the process of making the website
                available to users.
              </li>
              <br />
              <li>
                <b>Maintenance:</b> This is the process of updating and
                maintaining the website.
              </li>
              <br />
            </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-matteBlack">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          3. What is your price model ?
        </div>
        <div className="collapse-content">
          <p>
            Pyzen has a fixed price model for all mobile and web development
            projects. According to our clients&apos; demands, we can charge on an
            hourly or monthly basis as well.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-matteBlack">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          4. How much does web development cost?
        </div>
        <div className="collapse-content">
          <p>
            The cost of web development can vary depending on a number of
            factors, such as the complexity of the website, the features and
            functionality that it requires, and the experience of the
            development team. However, in general, web development can cost
            anywhere from a few thousand dollars to several hundred thousand
            dollars.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-matteBlack">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          5. How will you contact us?
        </div>
        <div className="collapse-content">
          <p>
            Our backend team responds to clients' demands and in case you have
            reached them for a service, you will be connected either via email,
            or a phone call.
          </p>
        </div>
      </div>
    </div>
  );
}
