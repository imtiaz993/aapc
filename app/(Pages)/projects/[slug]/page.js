import Topper from "./components/topper";
import Detail from "./components/detail";
import "../../../../public/css/home.css";
import "../../../../public/css/project-details.css";

export const metadata = {
  title: "AAPC | Gotham Hall",
  description: "",
};

const projectDetail = () => {
  return (
    <div>
      <Topper />
      <Detail />

      {/* <script>
    function navTest() {
        location.assign('project-details-template.html');
    }
</script>



*/}
    </div>
  );
};

export default projectDetail;
