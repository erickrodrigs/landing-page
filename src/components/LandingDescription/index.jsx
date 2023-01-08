import Link from "../Link";

function LandingDescription() {
  return (
    <div className="flex-container p-2">
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
        efficitur ex, at malesuada ligula. Pellentesque odio ipsum, viverra a
        eros sit amet, fringilla sagittis augue. Fusce risus tellus, tempus quis
        lacinia in, vehicula ut turpis.
      </p>
      <Link href={"#elo7-jobs"}>Vagas em aberto</Link>
    </div>
  );
}

export default LandingDescription;
