const Setup = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6 text-[#575962]">Setup Your Plugin</h1>
      <p className="my-4 text-lg">
        Go to Woocommerce tabs and Click on Blue-EX Order CN
      </p>
      <ul className="list-disc text-[#575962]">
          <li className="my-2">BlueEX API code which BlueEX will provide you after Successful demo process</li>
          <li className="my-2">BlueEX account Code which BlueEX will provide you after Successful demo process</li>
          <li className="my-2">Send Only OMS (If you want to manage orders through BLUEKART then select “Yes”, in this case all your orders will go to bluekart will manage there. If you only want to generate BlueEX CN then select “No”, in this case CN will be generate and display in your WooComerce order panel.</li>
      </ul>
      <img src="/images/setup1.jpg" alt="Webx Activation" loading="lazy" className="mb-2" />
      <img src="/images/setup2.jpg" alt="Webx Activation" loading="lazy" className="mb-2" />
      <img src="/images/setup3.jpg" alt="Webx Activation" loading="lazy" className="mb-2" />
      <img src="/images/setup4.jpg" alt="Webx Activation" loading="lazy" className="mb-2" />
    </div>
  );
};

export default Setup;
