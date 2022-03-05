import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import { useTempUnits } from "../../../../hooks";

const UnitsTab = () => {
  const [_tempUnits, set_tempUnits] = useState("F");

  const { getTempUnits, toggleTempUnits } = useTempUnits();

  const _setDefaultValue = () => set_tempUnits(getTempUnits());
  const _onChangeTempUnits = (value) => {
    set_tempUnits(value);
    toggleTempUnits();
  };

  // OnMount
  useEffect(() => {
    _setDefaultValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Layout.Column>
        <Layout.Row>
          <Layout.Column>
            <Layout.Row>
              <Layout.ToggleButton
                label={`Temp. Units`}
                value={_tempUnits}
                onChange={(e) =>
                  _onChangeTempUnits(e.target.value === "F" ? "C" : "F")
                }
              />
            </Layout.Row>
          </Layout.Column>
        </Layout.Row>
      </Layout.Column>
    </Layout>
  );
};
export default UnitsTab;
