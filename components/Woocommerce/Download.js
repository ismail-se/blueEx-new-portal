const Download = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6 text-[#575962]">Download Plugin</h1>
      <p className="my-4">Please download Extension from this url</p>
      <div className="overflow-x-auto">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th scope="row">URL</th>
              <td>
                <a
                  href="http://bigazure.com/Blue-Ex-Plugins/BlueEx-live.zip"
                  target="_blank"
                >
                  http://bigazure.com/Blue-Ex-Plugins/BlueEx-live.zip
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Download;
