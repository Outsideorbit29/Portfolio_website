import { ContactBlock } from "@/components/ContactBlock";
import { Frame, PageHeader } from "@/components/ui";

export default function ContactContent() {
    return (
        <div className="w-full">
            <PageHeader
                note="mailto: anish"
                title="Have something in mind?"
                sub="This form is the quickest way to reach me about a job, a project, or a collaboration."
                look="cloud"
            />
            <Frame>
                <ContactBlock showHeadings={false} />
            </Frame>
        </div>
    );
}
