const Download = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6 text-[#575962]">Download & Setup</h1>
      <ol className="text-[#575962] list-decimal">
        <li className="my-4">Please download Extension from this url</li>
        <div className="overflow-x-auto">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row">Download Version 1.1</th>
                <td>
                  <a
                    href="http://bigazure.com/Blue-Ex-Plugins/Magento/BlueEx_1_1.zip"
                    target="_blank"
                  >
                    http://bigazure.com/Blue-Ex-Plugins/Magento/BlueEx_1_1.zip
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <li className="my-4">Run and Compile below Commands</li>
        <p className="my-2 text-sm">php bin/magento setup:upgrade</p>
        <p className="my-2 text-sm">php bin/magento setup:di:compile</p>
        <p className="my-2 text-sm">
          php bin/magento setup:static-content:deploy
        </p>
        <p className="my-2 text-sm">php bin/magento cache:clean</p>
        <p className="my-2 text-sm">chmod 777 -R var/</p>
        <p className="my-2 text-sm">chmod 777 -R pub/</p>
        <li className="my-4">Setup Configuration</li>
        <div className="overflow-x-auto">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row">BlueEx Account Number</th>
                <td>KHI-00000</td>
              </tr>
              <tr>
                <th scope="row">API key (Licencse Key)</th>
                <td>64jkuyeh75hkjstgh87</td>
              </tr>
              <tr>
                <th scope="row">Customer Username</th>
                <td>demo</td>
              </tr>
              <tr>
                <th scope="row">Customer Password</th>
                <td>demo123456</td>
              </tr>
              <tr>
                <th scope="row">Live Mode</th>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope="row">Origin City</th>
                <td>Karachi</td>
              </tr>
              <tr>
                <th scope="row">Send Only OMS</th>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope="row">Yes Send directly to Bluekart</th>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope="row">
                  How often do you want syncronized orders status?
                </th>
                <td>Leave Blank</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img src="/images/01.jpg" alt="Webx Activation" loading="lazy" />
      </ol>
    </div>
  );
};

export default Download;
