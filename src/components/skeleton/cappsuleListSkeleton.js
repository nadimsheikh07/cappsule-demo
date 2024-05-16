import { CappsuleCard, CappsuleCardContent } from "@/styles/homepage";
import { Box, Card, Container, Skeleton, Stack } from "@mui/material";
import React from "react";

const CappsuleListSkeleton = ({ count = 1 }) =>
  [...Array(count)].map((item, index) => {
    return (
      <CappsuleCard key={`CappsuleListSkeleton-${index}`}>
        <CappsuleCardContent>
          <Stack direction="row" alignItems="center" mb={0} spacing={2}>
            <Box>
              <Skeleton variant="text" width={64} height={40} />
              <Skeleton variant="text" width={64} height={40} />
              <Skeleton variant="text" width={64} height={40} />
            </Box>
            <Box>
              <Skeleton variant="text" width={64} height={40} />
              <Skeleton variant="text" width={64} height={40} />
              <Skeleton variant="text" width={64} height={40} />
            </Box>
            <Box>
              <Skeleton variant="text" width={64} height={40} />
              <Skeleton variant="text" width={64} height={40} />
              <Skeleton variant="text" width={64} height={40} />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Skeleton
                width="100%"
                height={120}
                variant="rectangular"
                sx={{ borderRadius: 2 }}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Skeleton
                width="100%"
                height={120}
                variant="rectangular"
                sx={{ borderRadius: 2 }}
              />
            </Box>
          </Stack>
        </CappsuleCardContent>
      </CappsuleCard>
    );
  });

export default CappsuleListSkeleton;
