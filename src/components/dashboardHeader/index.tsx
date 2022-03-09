import Link from "next/link"
import { TitleSize32 } from "../../styles/emotion/Titles"
import { Button, Container } from "./styles"

type DashboardHeaderProps = {
    title: string,
    hasBackButton?: boolean,
}

export function DashboardHeader({title, hasBackButton} : DashboardHeaderProps) {
    return(
        <Container>

            {hasBackButton && (
                <Link
                    href="/"
                    passHref
                >
                    <Button>
                        <img src="/leftArrow2.svg"/>
                    </Button>
                </Link>
            )}

           <TitleSize32>
                {title}
           </TitleSize32>
        </Container>
    )
}