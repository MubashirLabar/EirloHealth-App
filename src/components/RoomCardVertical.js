import Touchable from "./Touchable";
import AppTag from "./AppTag";
import AppText from "./AppText";
import { useNavigation } from "@react-navigation/core";
import routes from "navigation/routes";

function RoomCardVertical({ data, className, style }) {
  const navigation = useNavigation();

  return (
    <Touchable
      className={`flex-1 bg-white p-3 rounded-lg ${className}`}
      style={style}
      onPress={() =>
        navigation.navigate(routes.ROOM_DETAIL_SCREEN, { id: data.id })
      }
    >
      <AppTag status={data.status} />
      <AppText className="font-SemiBold text-[16px] mb-1.5">
        {data.name}
      </AppText>
      <AppText className="text-grey-900">{data.status}</AppText>
    </Touchable>
  );
}

export default RoomCardVertical;
