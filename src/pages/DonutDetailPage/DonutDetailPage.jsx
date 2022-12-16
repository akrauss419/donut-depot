import { useParams } from 'react-router-dom';

export default function DonutDetailPage({ donuts }) {
  const { donutFlavor } = useParams();

  const donut = donuts.find((d) => d.flavor === donutFlavor);
  
  return(
    <div>
      Donut Details
    </div>
  );
}