import React from "react";
import { Stack, Skeleton, Flex } from "@chakra-ui/react";

function SkeletonPage() {
	return (
		<Stack spacing={5}>
			<Skeleton height={14} width="30%">
				Skeleton
			</Skeleton>
			<Stack>
				<Skeleton height={8}>Skeleton</Skeleton>
				<Flex gap={2}>
					<Skeleton flex={1}>Skeleton</Skeleton>
					<Stack flex={1}>
						<Skeleton height={8}>Skeleton</Skeleton>
						<Skeleton height={8}>Skeleton</Skeleton>
						<Skeleton height={8}>Skeleton</Skeleton>
					</Stack>
				</Flex>
				<Skeleton height={8}>Skeleton</Skeleton>
				<Skeleton height={8}>Skeleton</Skeleton>
			</Stack>
		</Stack>
	);
}

export default SkeletonPage;
