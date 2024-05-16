import { CappsuleCard, CappsuleCardContent } from "@/styles/homepage";
import { Grid } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";

const SelectionChip = dynamic(() => import("./selectionChip"), {
  ssr: false,
});

const Title = dynamic(() => import("./title"), {
  ssr: false,
});

const Price = dynamic(() => import("./price"), {
  ssr: false,
});

const CappsuleList = ({ data }) => {
  const [selectedItem, setSelectedItem] = React.useState(() => {
    const firstFormKey = Object.keys(data?.salt_forms_json)[0];
    const firstFormValues = Object.values(
      data?.salt_forms_json?.[firstFormKey] || {}
    );
    const firstStrengthKey = Object.keys(
      data?.salt_forms_json?.[firstFormKey] || {}
    )[0];
    const firstPackingKey = Object.keys(firstFormValues[0] || {})[0];

    return {
      Form: firstFormKey,
      Strength: firstStrengthKey || null,
      Packing: firstPackingKey || null,
      lowestPrice: findLowestSellingPrice(
        Object.values(firstFormValues[0] || {})[0] || {}
      ),
    };
  });

  const handleSelectedItem = (key, value, item) => {
    let data = { ...selectedItem };
    switch (key) {
      case "Form":
        data = {
          ...data,
          [key]: value,
          Strength: Object.keys(item[value] || {})[0] || null,
          Packing:
            Object.keys(Object.values(item[value] || {})[0] || {})[0] || null,
          lowestPrice: findLowestSellingPrice(
            Object.values(item[value]?.[data.Strength] || {})[0] || {}
          ),
        };
        break;

      case "Strength":
        data = {
          ...data,
          [key]: value,
          Packing: Object.keys(item[data.Form]?.[value] || {})[0] || null,
          lowestPrice: findLowestSellingPrice(
            Object.values(item[data.Form]?.[value] || {})[0] || {}
          ),
        };
        break;

      case "Packing":
        data = {
          ...data,
          [key]: value,
          lowestPrice: findLowestSellingPrice(
            item[data.Form][data.Strength][value] || {}
          ),
        };
        break;
    }

    setSelectedItem(data);
  };

  function findLowestSellingPrice(data) {
    let lowestPrice = Infinity; // Set to positive infinity initially

    // Iterate through each key-value pair in the data object
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        // If the value is not null
        if (data[key] !== null) {
          // Iterate through each item in the array
          data[key] &&
            data[key].forEach((item) => {
              // Extract selling price
              const sellingPrice = item.selling_price;

              // Update lowest price if the current selling price is lower
              if (sellingPrice !== undefined && sellingPrice < lowestPrice) {
                lowestPrice = sellingPrice;
              }
            });
        }
      } else {
        lowestPrice = 0;
      }
    }
    // Return the lowest selling price found
    return lowestPrice;
  }

  React.useEffect(() => {
    // Find the lowest selling price
    findLowestSellingPrice(selectedItem.lowestPrice);
  }, []);

  return (
    <CappsuleCard>
      <CappsuleCardContent>
        <Grid
          container
          alignItems="center"
          spacing={{ lg: 0, md: 0, sm: 6, xs: 6 }}
        >
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <SelectionChip
              data={data}
              handleSelectedItem={handleSelectedItem}
              selectedItem={selectedItem}
            />
          </Grid>

          <Grid item lg={4} md={5} sm={12} xs={12}>
            <Title data={data} selectedItem={selectedItem} />
          </Grid>

          <Grid item lg={4} md={3} sm={12} xs={12}>
            <Price selectedItem={selectedItem} />
          </Grid>
        </Grid>
      </CappsuleCardContent>
    </CappsuleCard>
  );
};

export default CappsuleList;
