import Router from "next/router";

export function Button({ title, id  }) {
    return (
        <div>
            <div onClick={() => Router.push("/p/[id]", `/p/${id}`)}>
                {title}
            </div>
        </div>
    )
}