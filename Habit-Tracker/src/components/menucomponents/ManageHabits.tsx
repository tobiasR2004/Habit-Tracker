import React from "react";
import { CalendarPage } from "../Calendar";
import Header from "./Header";
import AltaModal from "../AltaHabitsM";

export default function ManageHabits() {
  const [AltaOpen, setAltaOpen] = React.useState(false);
  return (
    <section>
      <Header onOpenModal={() => setAltaOpen(true)} />
      <div className="bg-[#6060608e] rounded-2xl max-h-[95vh] overflow-auto">
        <CalendarPage />
      </div>

      <AltaModal open={AltaOpen} setOpen={setAltaOpen} />
    </section>
  );
}
