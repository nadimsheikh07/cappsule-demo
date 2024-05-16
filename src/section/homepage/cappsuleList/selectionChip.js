import { StyledChip } from "@/styles/homepage";
import { Chip, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const SelectionChip = ({ data, handleSelectedItem, selectedItem }) => {
  const [showMore, setShowMore] = React.useState({
    form: false,
    strength: false,
    packing: false,
  });

  const handleShowMore = (name) => {
    setShowMore((prev) => {
      return { ...prev, [name]: !prev[name] };
    });
  };
  return (
    <Grid container rowSpacing={4} columnSpacing={2}>
      <Grid item lg={4} md={4} sm={2} xs={4}>
        <Typography
          component="p"
          variant="typography15"
          fontWeight={300}
          color={(theme) => theme.palette.common.black}
        >
          Form :
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={10} xs={8}>
        <Stack
          direction="row"
          columnGap={1}
          flexWrap="wrap"
          rowGap={1}
          alignItems="end"
        >
          {Object.keys(data?.salt_forms_json).map((parentKey, parentIndex) => {
            if (!showMore.form && parentIndex > 3) {
              return (
                <React.Fragment
                  key={`FormChip-${parentKey}${parentIndex}`}
                ></React.Fragment>
              );
            }
            return (
              <StyledChip
                key={`FormChip-${parentIndex}`}
                chipVariant={
                  selectedItem?.Form == parentKey ? "SELECTED" : "NOT-SELECTED"
                }
                label={parentKey}
                variant="outlined"
                onClick={() =>
                  handleSelectedItem("Form", parentKey, data?.salt_forms_json)
                }
              />
            );
          })}{" "}
          {Object.keys(data?.salt_forms_json)?.length > 4 && (
            <Typography
              variant="body2"
              fontWeight={700}
              sx={{ cursor: "pointer" }}
              onClick={() => handleShowMore("form")}
            >
              {!showMore.form ? "more..." : "hide..."}
            </Typography>
          )}
        </Stack>
      </Grid>
      <Grid item lg={4} md={4} sm={2} xs={4}>
        <Typography
          component="p"
          variant="typography15"
          fontWeight={300}
          color={(theme) => theme.palette.common.black}
        >
          Strength :
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={10} xs={8}>
        <Stack
          direction="row"
          columnGap={1}
          flexWrap="wrap"
          rowGap={1}
          alignItems="end"
        >
          {Object.entries(data?.salt_forms_json).map(
            ([parentKey, parentValue], parentIndex) => {
              if (selectedItem?.Form == parentKey) {
                return (
                  <React.Fragment key={`STRENGTH-SHOW-${parentIndex}`}>
                    {Object.keys(parentValue).map((childKey, childIndex) => {
                      if (!showMore.strength && childIndex > 3) {
                        return (
                          <React.Fragment
                            key={`StrengthChip-${childIndex}`}
                          ></React.Fragment>
                        );
                      }
                      return (
                        <StyledChip
                          key={`StrengthChip-${childIndex}`}
                          chipVariant={
                            selectedItem?.Strength == childKey
                              ? "SELECTED"
                              : "NOT-SELECTED"
                          }
                          label={childKey}
                          variant="outlined"
                          onClick={() =>
                            handleSelectedItem(
                              "Strength",
                              childKey,
                              data?.salt_forms_json
                            )
                          }
                        />
                      );
                    })}
                    {Object.keys(parentValue)?.length > 4 && (
                      <Typography
                        variant="body2"
                        fontWeight={700}
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleShowMore("strength")}
                      >
                        {!showMore.strength ? "more..." : "hide..."}
                      </Typography>
                    )}
                  </React.Fragment>
                );
              }
            }
          )}
        </Stack>
      </Grid>
      <Grid item lg={4} md={4} sm={2} xs={4}>
        <Typography
          component="p"
          variant="typography15"
          fontWeight={300}
          color={(theme) => theme.palette.common.black}
        >
          Packaging :
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={10} xs={8}>
        <Stack
          direction="row"
          columnGap={1}
          flexWrap="wrap"
          rowGap={1}
          alignItems="end"
        >
          {Object.entries(data?.salt_forms_json).map(
            ([parentKey, parentValue], index) => {
              if (selectedItem?.Form == parentKey) {
                return Object.entries(parentValue).map(
                  ([childKey, childValue], childIndex) => {
                    if (selectedItem?.Strength == childKey) {
                      return (
                        <React.Fragment key={`Packing-SHOW-${childIndex}`}>
                          {childValue &&
                            Object.entries(childValue).map(
                              (
                                [grandChildKey, grandChildValue],
                                grandChildIndex
                              ) => {
                                let chipVariant = "NOT-SELECTED";

                                if (
                                  !Object.values(grandChildValue).every(
                                    (item) => (item != null ? true : false)
                                  ) &&
                                  selectedItem?.Packing == grandChildKey &&
                                  (selectedItem?.lowestPrice != Infinity ||
                                    !selectedItem?.lowestPrice)
                                ) {
                                  chipVariant = "SELECTED";
                                } else if (
                                  Object.values(grandChildValue).every((item) =>
                                    item == null ? true : false
                                  ) &&
                                  selectedItem?.Packing != grandChildKey
                                ) {
                                  chipVariant = "NOT-AVAILABLE-NOT-SELECTED";
                                } else if (
                                  Object.values(grandChildValue).every((item) =>
                                    item == null ? true : false
                                  ) &&
                                  selectedItem?.Packing == grandChildKey &&
                                  (selectedItem?.lowestPrice == Infinity ||
                                    !selectedItem?.lowestPrice)
                                ) {
                                  chipVariant = "NOT-AVAILABLE-SELECTED";
                                } else if (
                                  selectedItem?.Packing != grandChildKey
                                ) {
                                  chipVariant = "NOT-SELECTED";
                                }

                                if (!showMore.packing && grandChildIndex > 3) {
                                  return (
                                    <React.Fragment
                                      key={`PackingChip-${grandChildIndex}`}
                                    ></React.Fragment>
                                  );
                                }
                                return (
                                  <StyledChip
                                    key={`PackingChip-${grandChildIndex}`}
                                    chipVariant={chipVariant}
                                    label={grandChildKey}
                                    variant="outlined"
                                    onClick={() =>
                                      handleSelectedItem(
                                        "Packing",
                                        grandChildKey,
                                        data?.salt_forms_json
                                      )
                                    }
                                  />
                                );
                              }
                            )}
                          {Object.keys(childValue)?.length > 4 && (
                            <Typography
                              variant="body2"
                              fontWeight={700}
                              sx={{ cursor: "pointer" }}
                              onClick={() => handleShowMore("packing")}
                            >
                              {!showMore.packing ? "more..." : "hide..."}
                            </Typography>
                          )}
                        </React.Fragment>
                      );
                    }
                  }
                );
              }
            }
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SelectionChip;
