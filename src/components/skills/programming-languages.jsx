import {
    CategorySkills,
    CategoryTitle,
    SkillCategory,
    SkillRow
}

from "../../styles/skills.styled"
import SingleSkill from "./singleSkill"
import { useFlag } from "feature-toggles-react-sdk"
import javascript_svg from '../../assets/javascript.svg'
import python_svg from '../../assets/python.svg'
import racket_svg from '../../assets/racket.svg'
import bash_svg from '../../assets/bash.svg'
import c_svg from '../../assets/c.svg'
import typescript_svg from '../../assets/typescript.svg'
import golang_svg from '../../assets/go.svg'
import java_svg from '../../assets/java2.svg'

function ProgrammingLanguages () {


    const javascript = useFlag('programming-icons.javascript')
    const typescript = useFlag('programming-icons.typescript')
    const golang = useFlag('programming-icons.golang')
    const java = useFlag('programming-icons.java')

    return (
        <SkillCategory>
            <CategoryTitle>Programming Languages</CategoryTitle>
            <CategorySkills>
                <SkillRow>
                    <SingleSkill
                        icon={typescript_svg}
                        name="TypeScript"
                    />
                    <SingleSkill
                        icon={javascript_svg}
                        name="JavaScript"
                    />
                    {/*<SingleSkill*/}
                    {/*icon={bash_svg}*/}
                    {/*name="Bash"*/}
                    {/*/>*/}
                    {/*<SingleSkill */}
                    {/*icon={python_svg}*/}
                    {/*name="Python"*/}
                    {/*/>*/}
                </SkillRow>
                <SkillRow>
                   {/*{ javascript ?*/}
                   {/*     <SingleSkill*/}
                   {/*     icon={javascript_svg}*/}
                   {/*     name="JavaScript"*/}
                   {/*     /> : null*/}
                   {/* }*/}
                    {/*{ java ?*/}
                    {/*    <SingleSkill*/}
                    {/*    icon={java_svg}*/}
                    {/*    name="Java"*/}
                    {/*    /> : null*/}
                    {/*}*/}
                    {/*{ typescript ?*/}
                    {/*    <SingleSkill*/}
                    {/*    icon={typescript_svg}*/}
                    {/*    name="TypeScript"*/}
                    {/*    /> : null*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    golang ?*/}
                    {/*    <SingleSkill*/}
                    {/*    icon={golang_svg}*/}
                    {/*    name="Golang"*/}
                    {/*    /> : null*/}
                    {/*}*/}
                </SkillRow>
                {/*<SkillRow>*/}
                {/*    <SingleSkill*/}
                {/*    icon={racket_svg}*/}
                {/*    name="Racket"*/}
                {/*    />*/}
                {/*    <SingleSkill*/}
                {/*    icon={c_svg}*/}
                {/*    name="C"*/}
                {/*    />*/}
                {/*</SkillRow>*/}
            </CategorySkills>
        </SkillCategory>
    )
}

export default ProgrammingLanguages
