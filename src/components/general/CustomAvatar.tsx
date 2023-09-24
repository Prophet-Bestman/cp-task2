const CustomAvatar = ({ name }: { name: string }) => {
  return (
    <div className="text-avatarText w-[56px] h-[56px] text-xl bg-avatarBg rounded-full font-semibold center-item">
      {name[0]}
      {name[1]}
    </div>
  );
};

export default CustomAvatar;
