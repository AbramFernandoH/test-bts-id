import { useParams } from 'react-router-dom'

function CheckListItemDetail() {
  const { id, itemId } = useParams()
  return (
    <div>
      checklist id is {id} while item id is {itemId}
    </div>
  );
}

export default CheckListItemDetail;