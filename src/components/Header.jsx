import React from "react";
import { NuevoPresupuesto } from "./NuevoPresupuesto";
import { ControlPresupuesto } from "./ControlPresupuesto";
export const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  setGastos,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          setGastos={setGastos}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};
